import { useState, useEffect } from "react"
import finnHub from "../api/finnHub"

function StockList() {
    const [watchList, setWatchList] = useState(['GOOGL', 'MSFT', 'AMZN'])
    const [stock, setStock] = useState([])

    useEffect(() => {
        let isMounted = true
        const fetchData = async () => {
            const promises = []
            try {
                // return array of promises
                const responses = await Promise.all(watchList.map(w => {
                    return finnHub.get('/quote', {
                        params: {
                            symbol: w
                        }
                    })
                }))
                console.log(responses)
                if (isMounted) {
                    setStock(responses.map(r => ({data: r.data, symbol: r.config.params.symbol}) ))
                }
            } catch(err) {
                console.log(err)
            }
        }
        fetchData()
        return () => (isMounted = false) // run when component is unmounted
    }, [])

    return (
        <div>
            <table className="table hover mt-5">
                <thead style={{color: 'rgb(79,89,102)'}}>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Last</th>
                        <th scope="col">Chg</th>
                        <th scope="col">Chg%</th>
                        <th scope="col">High</th>
                        <th scope="col">Low</th>
                        <th scope="col">Open</th>
                        <th scope="col">Pclose</th>
                    </tr>
                </thead>
                <tbody>
                    {stock.map(s => {
                            return (
                                <tr key={s.symbol} className="table-row">
                                    <th scope="row">{s.symbol}</th>
                                    <td>{s.data.c}</td>
                                    <td>{s.data.d}</td>
                                    <td>{s.data.dp}</td>
                                    <td>{s.data.h}</td>
                                    <td>{s.data.l}</td>
                                    <td>{s.data.o}</td>
                                    <td>{s.data.pc}</td>
                                </tr>
                            )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default StockList
