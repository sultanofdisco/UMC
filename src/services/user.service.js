import bycrypt from "bcrypt";
import { responseFromUser, responseFromReview, userMissionToResponse } from "../dtos/user.dto.js";
import {
    addUser,
    getUser,
    getUserPreferencesByUserId,
    setPreference,
    getStoreById,
    addReview,
    getReview,
    findActiveMission,
    addMission
} from "../repositories/user.repository.js";

export const userSignUp = async (data) => {
    const hashedPassword = await bycrypt.hash(data.password, 10);
    const joinUserId = await addUser({
        email: data.email,
        name: data.name,
        gender: data.gender,
        birth: data.birth,
        address: data.address,
        detailAddress: data.detailAddress,
        phoneNumber: data.phoneNumber,
        password: hashedPassword
    });

    if (joinUserId == null) {
        throw new Error("이미 존재하는 이메일입니다");
    }

    for (const preference of data.preferences) {
        await setPreference(joinUserId, preference);
    }

    const user = await getUser(joinUserId);
    const preferences = await getUserPreferencesByUserId(joinUserId);

    return responseFromUser({ user, preferences });
};   

export const addUserReview = async (data) => {

    const store = await getStoreById(data.storeId);
    if (!store) {
        throw new Error("존재하지 않는 음식점입니다.");
    }

    const reviewID = await addReview({
        userId: data.userId,
        storeId: data.storeId,
        rating: data.rating,
        comment: data.comment,
        images: data.images,
    });

    const review = await getReview(reviewID);
    return responseFromReview(review);
}

export const addUserMission = async (data) => {

    const activeMission = await findActiveMission(data.missionId, data.userId);
    if (activeMission) throw new Error("이미 도전 중인 미션입니다.");

    const userMission = addMission({
        userId: data.userId,
        missionId: data.missionId
    });
    return userMissionToResponse(userMission);
}
