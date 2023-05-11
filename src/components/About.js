import React from 'react'

export default function About(props) {

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#777a79',
        backgroundColor: props.mode === 'dark' ? '#777a79' : 'white'
    }

    return (
        <div className='container pb-1' style={myStyle}>

            <h1 className='my-3'>About us</h1>

            <div className="accordion" style={myStyle} id="accordionExample">

                <div className="accordion-item" style={myStyle}>

                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Analyze Your Text
                        </button>
                    </h2>

                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ullam illum velit deleniti autem earum ducimus fugit nulla accusamus quas est totam consectetur consequuntur ex eveniet animi odit, fuga maxime.
                        </div>
                    </div>

                </div>

                <div className="accordion-item" style={myStyle}>

                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Free to use
                        </button>
                    </h2>

                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias assumenda praesentium beatae ducimus deleniti, consequuntur ipsa voluptatem adipisci atque esse.
                        </div>
                    </div>

                </div>

                <div className="accordion-item" style={myStyle}>

                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Browser Compatible
                        </button>
                    </h2>

                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, fuga nisi. Enim accusantium officia, exercitationem temporibus ipsum beatae neque numquam perferendis atque iure laudantium ratione!
                        </div>
                    </div>

                </div>

            </div>
            {/* <div className="container my-2">
                <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
            </div> */}
        </div >
    )
}
