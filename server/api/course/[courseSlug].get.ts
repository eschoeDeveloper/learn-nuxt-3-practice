import { getCourse } from '~/server/models/course';

export default defineEventHandler((event) => {
  const courseSlug = getRouterParam(event, 'courseSlug') as string;
  const courseDetails = getCourse(courseSlug);

  if (!courseDetails.course) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Course Data Is Null',
    });
  }

  return courseDetails;
});
