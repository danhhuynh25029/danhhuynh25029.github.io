export default function hello(req,res){
    
    const { ID } = req.query
    return (
        <>
            <h1>hello {ID}</h1>
        </>
    )
}