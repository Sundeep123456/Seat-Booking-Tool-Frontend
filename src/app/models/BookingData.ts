export interface BookingData {
  [key: string]: LocationData
  }


  interface LocationData {
    [key: string]: GroupData
  }

  interface GroupData {
    [key: string]: FloorData
  }

  interface FloorData {
    [key: string]: WorkspaceData
  }

  interface WorkspaceData {
    [key: string]: SlotData
  }

  export interface SlotData {
    [key: string]: SlotTime[]
  }

  export enum SlotTime {
    AM = "AM",
    PM = "PM"
  }