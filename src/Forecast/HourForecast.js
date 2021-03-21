import React from "react";
import { Col, Row } from "react-grid-system";


export default function HourForecast(props){
    function morning() {
        let morning= Math.round(props.data.morn);
        return `${morning} ºC`;
    }

    function evening() {
        let evening= Math.round(props.data.eve);
        return `${evening} ºC`;
    }

    function night() {
        let night= Math.round(props.data.night);
        return `${night} ºC`;
    }

    return(
        <div>
        <Row>
            <Col>
            <div class="col-3">
              <p>Morning</p>
              <p><span>{morning()}</span></p>
            </div>
            </Col>
            <Col>
            <div class="col-3">
              <p>Afternoon</p>
              <p><span>{evening()}</span></p>
            </div>
            </Col><Col>
            <div class="col-3">
              <p>Night</p>
              <p><span>{night()}</span></p>
            </div>
            </Col>
        </Row>
    </div>
    )
}