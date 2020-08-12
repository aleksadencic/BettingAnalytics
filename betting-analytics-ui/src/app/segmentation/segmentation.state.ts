export interface MembersState {
    membersData: any[]
}

export const defaultMembersState: MembersState = {
    membersData: null,
};

export interface SegmentationState {
    members: MembersState;
    isValid: boolean;
};

export const initialSegmentationState = {
    members: defaultMembersState,
    isValid: false,
};