type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

type BottomType = Pick<AllType, 'position' | 'weight'>

function compare (top: Pick<AllType, 'name' | 'color'>, bottom: BottomType): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}
