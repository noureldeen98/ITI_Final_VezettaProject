export function getAllDepts (data) {
    return {
        type: 'getDepts',
        payload: data
    }
}

export function getCommonDepts (data) {
    return {
        type: 'getCommonDepts',
        payload: data
    }
}

export function otherCommonDepts (data) {
    return {
        type: 'getOtherDepts',
        payload: data
    }
}
