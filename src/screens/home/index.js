import React,{Component} from "react";
import {connect} from "react-redux"
import {withRouter} from "react-router-dom";
import {FetchData} from "../../slice/homeslice";
import "./index.scss"
class Home extends Component{
    constructor(props){
       super(props);
       this.state={
          data:[]
       }
    }
componentDidMount(){
  const {dispatch} =this.props;
  dispatch(FetchData())
}

    render(){
        const {home}=this.props;
        let values=[]
        if(home.data!=="undefined"&&home.data.length!==0){
           values=[...values,Object.values(home.data.reduce((acc,cur)=>Object.assign(acc,{[cur.Country]:cur}),{}))]
         }
     
        return(
           <div className="container">
             {values.length!==0 && values[0].map(i=>{
                return (
                    <div >
                        <a  href={`/listing/`+i.Country.replace(" ","-")} style={{textDecoration:"none"}}>
                    <div className="card1">
                      <h3>{i.Brand}</h3>
                      <p className="small">{i.Variety},{i.Style}</p>
                      <p className="small">{i.Country}</p>
                      <p className="small">Rating:{i.Stars}</p>
                      <p className="small">Top Ten:{i['Top Ten']}</p>
                      <p className="small">Country:{i.Country}</p>
                      <div className="go-corner" href="#">
                        <div className="go-arrow">
                          →
                        </div>
                      </div>
                      </div>
                    </a>
                    </div>


                )}
                )}
           </div>
        )
    }
    
}

function mapStateToProps(state){
    const {home}=state;
    return {
        home
    }
}

export default withRouter(connect(mapStateToProps)(Home)) 