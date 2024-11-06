// src/slices/formSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRequisitionDetails, IJobDetails, IInterViewSettings } from '../interface/forms';

interface FormState {
  requisitionDetails: IRequisitionDetails;
  jobDetails: IJobDetails;
  interviewSettings: IInterViewSettings;
}

const initialState: FormState = {
  requisitionDetails: {
    requisitionTitle: '',
    noOfOpenings: 0,
    urgency: '',
    gender: '',
  },
  jobDetails: {
    jobTitle: '',
    jobDetails: '',
    jobLocation: '',
  },
  interviewSettings: {
    interviewMode: '',
    interviewDuration: '',
    interviewLanguage: '',
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setRequisitionDetails(state, action: PayloadAction<IRequisitionDetails>) {
      state.requisitionDetails = action.payload;
      console.log("This is from Slice : ", action.payload)
    },
    setJobDetails(state, action: PayloadAction<IJobDetails>) {
      state.jobDetails = action.payload;
    },
    setInterviewSettings(state, action: PayloadAction<IInterViewSettings>) {
      state.interviewSettings = action.payload;
    },
  },
});

export const { setRequisitionDetails, setJobDetails, setInterviewSettings } = formSlice.actions;

export default formSlice.reducer;
