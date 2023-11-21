
/**扑克类型 */
export enum ItemType{
    Square,
    Plum,
    Heart,
    Spade
}

/**方向 */
export enum DirectionType {
    Top = 1,
    Bottom = 2,
    Left = 3,
    Right = 4,
}

export enum EventId {
    creatPorker = 0,
    RaningWheel,
    UpdataScord,
    RemberNum,
    Result
}

export enum WheelState {
    Stand = 0,
    Acelerara = 1,
    Desacelerar = 2,
}

export interface WheelData {
    type: WheelType,
    num: number
}

export enum WheelType {
    BetLv = 1,
    Spin = 2,
}