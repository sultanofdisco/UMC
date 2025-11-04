import { missionToResponse } from "../dtos/store.dto.js";
import { addMission, getMission } from "../repositories/store.repository.js";

export const addStoreMission = async (missionData) => {
    const missionId = await addMission({
        storeId: missionData.storeId,
        missionTitle: missionData.missionTitle,
        missionContent: missionData.missionContent,
        missionPoint: missionData.missionPoint
    });

    const mission = await getMission(missionId);
    return missionToResponse(mission);
}