import React,{Component} from "react";
import {connect} from "react-redux"
import {withRouter} from "react-router-dom";
import "../home/index.scss";

class Country extends Component {
    constructor(props){
        super(props);
        this.state={
           country:"",
           data:[],
           value:"",
           proccessing:false
        }
    }

    componentDidMount(){
        let name = this.props.match.params.Country;
        this.setState({country:name}); 
      
    }
    processing (){
        const {proccessing}=this.state;
        this.setState({proccessing:false})
    }
    getUnique(){
        const {data,value}=this.state;
        let values=[]
        let all='All'
        if(value===all){
           this.processing()
        }
        else {
          values=data.filter(e =>{return( e.Brand === value)})
          return (
            <div>
            
        <div className="container">
        {values.length!==0 && values.map(i=>{
          return(   <div>   
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
               
                </div>)})}
                {values.length===0  &&
                <p>Your Search Not in this Country</p>
                }
                </div>
                </div>

          )
        }
    }
    getAll(){
        const {home}=this.props;
        let toRender = [];
        let Name=this.state.country
        if(![undefined,null,NaN,""].includes(this.state.country)){
            toRender = home.data.filter(e =>{return( e.Country === Name.replace("-"," "))})
        }
        return (
            <div>
                <div style={{display:"flex",flexDirection:"row"}}>
               <h1>Search yourBrands Here </h1> &nbsp;
               <select onChange={e=>this.setState({value:e.target.value,proccessing:true,data:toRender})}>
                  <option>All</option>
                  {toRender.length!==0 && toRender.map(i=>{
                      return (
                        <option>{i.Brand}</option>
                      )})}
               </select>
               </div>
            <div className="container">
            {toRender.length!==0 && toRender.map(i=>{
              return(   <div>   
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
                   
                    </div>)})}
                    </div>
                    </div>

        )
       
    }

    render(){
        const {home}=this.props;
        document.title = "Country | Thiru" ;
       return(
        <div>
        {this.state.proccessing&& 
        <div>
            <div style={{display:"flex",flexDirection:"row"}}>
           <h1>Search yourBrands Here </h1> &nbsp;
           <select onChange={e=>this.setState({value:e.target.value,proccessing:true})}>
              <option>All</option>
              {this.state.data.length!==0 && this.state.data.map(i=>{
                  return (
                    <option>{i.Brand}</option>
                  )})}
           </select>
           </div>
         </div>}
           {!this.state.proccessing&&this.getAll()}
           {this.state.proccessing && this.getUnique()}
        
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

export default withRouter(connect(mapStateToProps)(Country)) 