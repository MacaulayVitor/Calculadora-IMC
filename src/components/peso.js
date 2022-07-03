export default function peso(props){
    return(
    <div>
        <label>
          Peso
          <input type="number" min="1" value={props.p} onChange={(e)=>{props.sp(e.target.value)}}/>
        </label>
    </div>
    )
}