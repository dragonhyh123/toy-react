import {createElement,Component,render} from './toy-react.js';

class MyComonent extends Component{
    constructor() {
        super();
        this.state = {
            a:1,
            b:2,
        }
    }
  render(){
    return <div>
            <h1>My Component</h1>
            <span>{this.state.a.toString()}</span>
            {this.children}
          </div>
  }
}

render(<MyComonent>
  <div>abc</div>
  <div>cde</div>
  <div>test</div>
</MyComonent>,document.body);