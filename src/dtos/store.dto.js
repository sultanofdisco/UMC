export const bodyToMission = (body) => {
    return {
        storeId: Number(body.storeId),
        missionTitle: body.missionTitle || "",
        missionContent: body.missionContent || "",
        missionPoint: Number(body.missionPoint || 0)
    };
}

export const missionToResponse = (mission) => {
    return {
        storeId: mission.storeId,
        missionTitle: mission.missionTitle,
        missionContent: mission.missionContent,
        missionPoint: mission.missionPoint
    };
}