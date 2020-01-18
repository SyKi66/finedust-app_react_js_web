import React from 'react';
import axios from 'axios';
import Dust from './Dust';

const DUST_API = "/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=uAQWEIMklVDma9RwEnhvmKOt2rXaCalkDx8c2h0w6OPnRnc7Zt7D4lrzYpq0TeV4QtOFGph1UEbbOfA4zNbk9w%3D%3D&numOfRows=102&pageNo=1&sidoName=%EA%B2%BD%EA%B8%B0&ver=1.3&_returnType=json";

class App extends React.Component {
  state = {
    isLoading: true,
    dustData: []
  };

  getDustData = async () => {
    const {data:{list}}= await axios.get(DUST_API);
    this.setState({dustData: list, isLoading: false});
  }

  componentDidMount() {
    this.getDustData();
  }

  render() {

    return (
      <section>
        {this.state.isLoading ? (
          <h1>로딩중...</h1>
        ) : (
          <div>
            <h1>측정기준시간 : {this.state.dustData[0].dataTime}</h1>
            <div className = "all_element">
              {this.state.dustData.map( (each,id) => {
                return <Dust 
                  key = {id}
                  name = {each.stationName}
                  pm10 = {each.pm10Value}
                  so2 = {each.so2Value}
                  co = {each.coValue}
                  o3 = {each.o3Value}
                  no2 = {each.no2Value}                />
              })}
            </div>
          </div>)}
      </section>

    )


  }


}

export default App;