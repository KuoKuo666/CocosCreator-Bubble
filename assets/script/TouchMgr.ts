import { EVENT } from "./Interface";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TouchMgr extends cc.Component {

    @property(cc.Node) shooter: cc.Node = null;

    public onLoad (): void {
        this.openTouch();
    }

    public openTouch (): void {
        this.node.on(cc.Node.EventType.TOUCH_START, this._touchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._touchsMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this._touchEnd, this);
    }

    public closeTouch (): void {
        this.node.off(cc.Node.EventType.TOUCH_START, this._touchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this._touchsMove, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this._touchEnd, this);
    }

    private _touchStart (e: cc.Event.EventTouch): void {
        let d = this.convertToDegree(e);
        this.shooter.angle = d;
    }

    private _touchsMove (e: cc.Event.EventTouch): void {
        let d = this.convertToDegree(e);
        this.shooter.angle = d;
    }

    private _touchEnd (e: cc.Event.EventTouch): void {
        let d = this.convertToDegree(e);
        this.shooter.angle = d;
        // 发送角度
        cc.director.emit(EVENT.TOUCHEND_SHOOT, d);
    }

    // 转化角度
    private convertToDegree (e: cc.Event.EventTouch): number {
        let pos: cc.Vec2 = e.getLocation();
        let x = pos.x - this.shooter.x;
        let y = pos.y - this.shooter.y;
        let radian = Math.atan2(y, x);
        // 弧度转角度 0 - 2π -> 0 - 360
        let degree = cc.misc.radiansToDegrees(radian);
        // angle 与原版 rotation 差 90
        degree -= 90;
        // console.log(degree);
        if (degree < -80 && degree > -180) degree = -80;
        if (degree > 80 || degree <= -180) degree = 80;
        return degree;
    }

}
