import { prisma } from "../db.config.js";

// User 데이터 삽입
export const addUser = async (data) => {
  const user = await prisma.user.findFirst({ where: { email: data.email } });
  if (user) {
    return null;
  }

  const created= await prisma.user.create({ data: data});
  return created.id;
};

// 사용자 정보 얻기
export const getUser = async (userId) => {
  const user = await prisma.user.findFirstOrThrow({ where: { id: userId } });
  return user;
};

// 음식 선호 카테고리 매핑
export const setPreference = async (userId, foodCategoryId) => {
  await prisma.userFavorCategory.create({
    data: {
      userId: userId,
      foodCategoryId: foodCategoryId,
    },
  });
};

// 사용자 선호 카테고리 반환
export const getUserPreferencesByUserId = async (userId) => {
  const preferences = await prisma.userFavorCategory.findMany({
    select: {
      id: true,
      userId: true,
      foodCategoryId: true,
      foodCategory: true,
    },
    where: { userId: userId },
    orderBy: { foodCategoryId: "asc" },
  });

  return preferences;
};

export const getStoreById = async (storeId) => {
  const store = await prisma.store.findFirst({
    where: { id: storeId },
  });
  return store;
}

export const addReview = async (data) => {
  const createdReview = await prisma.review.create({
    data: { 
      userId: Number(data.userId),
      storeId: Number(data.storeId),
      rating: Number(data.rating),
      comment: data.comment ?? "",  
      images: data.images ?? "",
    },
  });
}

export const getReview = async (reviewId) => {
  const review = await prisma.review.findFirstOrThrow({ where: { id: reviewId } });
  return review;
};

export const findActiveMission = async (missionId, userId) => {
    const userMission = await prisma.userMission.findFirst({
        where: { missionId: missionId, userId: userId }
    });
    return userMission;
}

export const addMission = async (data) => {
    const createdUserMission = await prisma.userMission.create({
        data: { 
            userId: Number(data.userId),
            missionId: Number(data.missionId)
        },
    });
    return createdUserMission;
}