import React from "react";


const Footer = () => {
    
    return(
        <footer>
            <div className="wrapperdiv">
                <div style={{flex: "1 1 300px"}}>
                    Hecho por Javier Monardo
                </div>
                <div className="flexdiv">
                    <div className="hiperlinkdiv">
                        <a href="https://github.com/JavierHM-Audioslave/challenge-flydevs" target="_blank">Link al GitHub</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;