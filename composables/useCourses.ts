import type { CourseWithPath } from '~/types/course';

interface CoursesReturn {
  courses: CourseWithPath[];
}

export const useCourses = async (): Promise<CoursesReturn> => {
  const { data, error } = await useFetch('/api/course');

  if (error.value) {
    throw createError({
      ...error.value,
    });
  }

  return {
    courses: data.value as CourseWithPath[],
  };
};
