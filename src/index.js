import reactDom from "react-dom/client"
import "./style.css"
import App from "./apps.js"

const root = reactDom.createRoot(document.getElementById("root"))

root.render(<App></App>
)