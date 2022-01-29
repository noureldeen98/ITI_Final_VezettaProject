import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDepts } from '../../../ReactRedux/Actions/DeptsActionRedux';
import style from './Part6.module.css';
export default function Part6() {
    const depts = useSelector(state => state.dptReduxReducer.depts);
    const [allDepts, setAllDepts] = useState([depts]);
    const dispatch = useDispatch();
    //useEfect
    useEffect(() => {
        // dispatch(getDepts());
        dispatch(getAllDepts());
        // setAllDepts(oldDept => oldDept[0]);
    }, []);
    console.log(allDepts);

    return <>

    </>;
}
