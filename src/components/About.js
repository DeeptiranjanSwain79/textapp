import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    // });
     
    document.title = 'TextApp | About Us';

    let myStyle = {
        color: props.mode === 'dark' ? 'white': '#061529',
        backgroundColor: props.mode === 'dark' ? '#061529' : 'white',
        border: '2px solid',
        borderColor: props.mode === 'dark' ? 'white': '#061529'
    }


    return (
        <>
            <div className="accordion my-4" id="accordionExample" style={{color: props.mode === 'dark' ? 'white': '#061529'}}>
                <h1 className='mx-5 my3'>About Us</h1>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingOne" >
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                            <b>Analyze your text</b>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This website will manipulate & analyze your text</strong> TextApp also referred to as text data mining, similar to text analytics, is the process of deriving high-quality information from text. It involves "the discovery by computer of new, previously unknown information, by automatically extracting information from different written resources."
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                            <b>Free to use</b>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This website is completely free.</strong> It is a generally accepted standard that editors should attempt to follow, though it is best treated with common sense, and occasional exceptions may apply. Any substantive edit to this page should reflect consensus. When in doubt, discuss first on the talk page.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <b>Browser Compatible</b>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This website is compatible for any browser.</strong> THis word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf documents, essays etc.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
