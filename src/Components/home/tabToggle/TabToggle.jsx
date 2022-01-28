import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import getDepts from '../../../ReactRedux/Actions/DeparmentsAction';
export default function TabToggle() {
    const dispatch = useDispatch();
    const depts = useSelector((state) => state.deptRed);

    useEffect(() => {
        dispatch(getDepts())
    }, [])

    console.log('my data', depts);
    return <>
    <h1>hello</h1>
    </>;
}
