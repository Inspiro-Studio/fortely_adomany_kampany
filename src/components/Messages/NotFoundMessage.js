import React from "react"
import { Link } from "gatsby"
import "./message.scss"

export default function NotFoundMessage() {
  return (
    <div className="message-container">
      <div className="message-box">
        <h2>404 - Az oldal nem található</h2>
        <Link className="btn btn-primary" to="/">
          Vissza a főoldalra
        </Link>
      </div>
    </div>
  )
}
