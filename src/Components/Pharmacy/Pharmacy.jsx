import PHeader from "./PHeader/PHeader";
import React from 'react';
import PFooter from './PFooter/PFooter';
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section4 from "./Section4/Section4";
import { Container } from "react-bootstrap"

export default function Pharmacy() {
    return <div>
            <PHeader />
            <Section1 />
            <Section2 />
            <Section4 />
            <PFooter />
    </div>;
}
