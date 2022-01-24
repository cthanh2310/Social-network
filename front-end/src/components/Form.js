import React from 'react';
import '../css/Form.css'

export default function Form() {
  return (
    <div>
        <section className="form-section">
                <form action="" className="form">
                    <textarea 
                        type="text"
                        name="content"
                        id="content"
                        className="content"
                        placeholder="Write your thinking..."
                    >
                    </textarea>
                    <button className="btn" type="submit">Tweet</button>
                </form>
            </section>
    </div>
  )
}
