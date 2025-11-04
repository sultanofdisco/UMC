import { StatusCodes } from "http-status-codes";
import { bodyToMission } from "../dtos/store.dto.js";
import { addStoreMission } from "../services/store.service.js";

export const handleAddMission = async (req, res, next) => {
    console.log("미션 추가를 요청했습니다!");
    console.log("body:", req.body); // 값이 잘 들어오나 확인하기 위한 테스트용    
    
    const mission = await addStoreMission(bodyToMission(req.body));
    
    res.status(StatusCodes.OK).json({ result: "미션 추가 성공!" });     
}