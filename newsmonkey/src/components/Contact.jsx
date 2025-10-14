import React, { Component } from 'react'

export class Contact extends Component {
  render() {
    return (
      <>
    <div style={{ maxWidth: "500px", margin: "40px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", background: "#fafafa" }}>
        <h2>Contact Us</h2>
        <form>
            <div style={{ marginBottom: "15px" }}>
                <label htmlFor="name" style={{ display: "block", marginBottom: "5px" }}>Name</label>
                <input type="text" id="name" name="name" style={{ width: "100%", padding: "8px" }} />
            </div>
            <div style={{ marginBottom: "15px" }}>
                <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>Email</label>
                <input type="email" id="email" name="email" style={{ width: "100%", padding: "8px" }} />
            </div>
            <div style={{ marginBottom: "15px" }}>
                <label htmlFor="message" style={{ display: "block", marginBottom: "5px" }}>Message</label>
                <textarea id="message" name="message" rows="4" style={{ width: "100%", padding: "8px" }}></textarea>
            </div>
            <button type="submit" style={{ padding: "10px 20px", background: "#007bff", color: "#fff", border: "none", borderRadius: "4px" }}>Send</button>
        </form>
    </div>
      </>
    )
  }
}

export default Contact