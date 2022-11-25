const Home = () => {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '458d304e3bmsh5348829f8d379b1p138a54jsn0f0c995f2b45',
            'X-RapidAPI-Host': 'random-facts2.p.rapidapi.com'
        }
    };
    
    fetch('https://random-facts2.p.rapidapi.com/getfact', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    return ( 
        <div className="home">
            <h3>Get your random facts here!</h3>
            <p></p>
        </div>
     );
}
 
export default Home;