import { response } from "express";
import { responseFromUser, responseFromReview } from "../dtos/user.dto.js";
import {
    addUser,
    getUser,
    getUserPreferencesByUserId,
    setPreference,
    getStoreById,
    addReview,
    getReview
} from "../repositories/user.repository.js";

export const userSignUp = async (data) => {
    const joinUserId = await addUser({
        email: data.email,
        name: data.name,
        gender: data.gender,
        birth: data.birth,
        address: data.address,
        detailAddress: data.detailAddress,
        phoneNumber: data.phoneNumber,
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