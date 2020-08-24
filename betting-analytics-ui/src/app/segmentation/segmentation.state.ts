// export interface MembersState {
//     membersData: any[]
// }

// export const defaultMembersState: MembersState = {
//     membersData: null,
// };

export interface SegmentationState {
    members: any[];
    isDataLoaded: boolean;
    isDataLaunching: boolean;
    isValid: boolean;
};

export const initialSegmentationState = {
    members: null,
    isDataLoaded: false,
    isDataLaunching: false,
    isValid: false,
};
