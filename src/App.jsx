import React from "react"
import Header from "./components/Header"
import Meme from "./components/Meme"
import "./App.css"

export default function App() {
    const styles = {
        width: "600px",
        margin: "auto"
    }
    return (
        <div style={styles}>
            <Header />
            <Meme />
        </div>
    )
}
