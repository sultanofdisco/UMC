import { StatusCodes } from "http-status-codes";
import { bodyToReview, bodyToUser, bodyToUserMission } from "../dtos/user.dto.js";
import { userSignUp, addUserReview, addUserMission } from "../services/user.service.js";

export const handleUserSignUp = async (req, res, next) => {
  console.log("회원가입을 요청했습니다!");
  console.log("body:", req.body); // 값이 잘 들어오나 확인하기 위한 테스트용

  const user = await userSignUp(bodyToUser(req.body));
  res.status(StatusCodes.OK).json({ result: user });
};

export const handleAddReview = async (req, res, next) => {
  console.log("리뷰 작성을 요청했습니다!");
  console.log("body:", req.body); // 값이 잘 들어오나 확인하기 위한 테스트용

  const review = await addUserReview(bodyToReview(req.body));
  res.status(StatusCodes.OK).json({ result: review });
}

export const handleAddUserMission = async (req, res, next) => {
  console.log("사용자 미션 추가를 요청했습니다!");
  console.log("body:", req.body); // 값이 잘 들어오나 확인하기 위한 테스트용    

  const userMission = await addUserMission(bodyToUserMission(req.body));

  res.status(StatusCodes.OK).json({ result: "사용자 미션 추가 성공!" });     
}