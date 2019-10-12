/** 泡泡对象 */
export interface bubbleData {
    node: cc.Node,
    color: number,
    isVisited: boolean,
    isLinked: boolean
}

/** 导出事件名称枚举 */
export enum EVENT {
    /** 触摸结束后，射击事件，附带角度参数 */
    TOUCHEND_SHOOT = 'shoot'
}
