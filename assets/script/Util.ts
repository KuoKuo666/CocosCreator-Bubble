export default class Util {

    public static readonly SCREEN_W: number = 720;
    public static readonly SCREEN_H: number = 1280;
    public static readonly BUBBLE_R: number = 40;
    /** Y 方向偏差为 40 倍根号 3 */
    public static readonly BUBBLE_Y: number = 40 * Math.sqrt(3);

    /** 随机数 min - max */
    public static randNum (min: number, max: number): number {
        // random 0 - 1 不包括 1 
        return min + Math.floor((max - min + 1) * Math.random());
    }

    /** 传入二维数组行列，返回泡泡对应位置坐标 */
    public static convertRowColToPos (row: number, col: number): cc.Vec2 {
        // 奇数行前方少一个半径宽
        // 如果为偶数行 row % 2 = 0;
        let posX: number = this.BUBBLE_R * ((row % 2) + 1) + col * this.BUBBLE_R * 2;
        let posY: number = this.SCREEN_H - (this.BUBBLE_R + row * this.BUBBLE_Y);
        return cc.v2(posX, posY);
    }

    /** 传入泡泡对应位置坐标，返回二维数组行列 */
    public static convertPosToRowCol (posX: number, posY: number): cc.Vec2 {
        let row: number = Math.round((this.SCREEN_H - posY - this.BUBBLE_R) / this.BUBBLE_Y);
        let col: number = Math.round((posX - this.BUBBLE_R * ((row % 2) + 1)) / (this.BUBBLE_R * 2));
        return cc.v2(row, col);
    }

}
