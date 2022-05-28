interface myBus {
  colors?: "blue" | "red"
}

function paintMyBus(id: number, color: NonNullable<myBus["colors"]>) {
  return {
    id,
    color,
  }
}
/* ReturnType Utility Type returns the type of the return value of a function. */
type paintMyBusReturn = ReturnType<typeof paintMyBus>
