export default function altura(props){
    return(
    <div>
        <label >
          Altura
          <input type="number" min="1" value={props.a} onChange={(e)=>{props.sa(e.target.value)}}/>
        </label>
    </div>
    )
}