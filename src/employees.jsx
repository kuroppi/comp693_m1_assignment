let zak     = 'Zak Ruvalcaba'
let sally   = 'Sally Smith'
let holly   = 'Holly Unlikely'
let amol    = 'Amol Shookup'
let robin   = 'Robin Banks'
let aaron   = 'Arron D. Tires'
let john    = 'John Doe';
let jane    = 'Jane Doe';

const element = (
    <ul style={{'color': 'blue', 'fontSize': '24px'}}>
        <li>{zak}</li>
        <li>{sally}</li>
        <li>{holly}</li>
        <li>{amol}</li>
        <li>{robin}</li>
        <li>{aaron}</li>
        <li>{john}</li>
        <li>{jane}</li>
    </ul>
)

ReactDOM.render(element, document.getElementById('content'))