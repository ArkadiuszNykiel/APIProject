function Home() {
    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Universal Country Database</h1>
            <p>
                Welcome to the Universal Country Database! Use this website to explore countries worldwide. 
                You can search for countries by name or filter them by region for easier navigation.
            </p>
            <footer style={{ marginTop: "20px", fontSize: "14px", color: "gray" }}>
                This website uses the REST Countries API to provide up-to-date country data.
            </footer>
        </div>
    );
}

export default Home;
