import React from "react"

function NavButton(props) {
    return (
        <div class="nav-button">
            <a href={props.link}>
                <h4>{props.text}</h4>
            </a>
        </div>
    );
}

export default NavButton;