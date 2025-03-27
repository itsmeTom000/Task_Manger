const TASK_NAME = "/task";
import { apiSlice } from "../apiSlice";

export const taskApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardStatus: builder.query({
      query: () => ({
        url: `${TASK_NAME}/dashboard`,
        method: "GET",
        credentials: "include",
      }),
      transformResponse: (response) => {
        if (!response) {
          console.error("Empty response from API");
          return {};
        }
        return response?.data ?? response; // Ensures response is returned properly
      },
      providesTags: ["Dashboard"],
    }),

    getAllTask: builder.query({
      query: ({ strQuery, isTrashed, search }) => ({
        url: `${TASK_NAME}?stage=${strQuery}&isTrashed=${isTrashed}&search=${search}`,
        method: "GET",
        credentials: "include",
      }),
      transformResponse: (response) => {
        if (!response) {
          console.error("Empty response from API");
          return {};
        }
        return response.data || response;
      },
      providesTags: ["Dashboard"],
    }),

    createTask: builder.mutation({
      query: (data) => ({
        url: `${TASK_NAME}/create`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),

    duplicateTask: builder.mutation({
      // Fixed typo
      query: (id) => ({
        url: `${TASK_NAME}/duplicate/${id}`, // Fixed spelling
        method: "POST",
        body: {},
        credentials: "include",
      }),
    }),

    updateTask: builder.mutation({
      query: (data) => ({
        url: `${TASK_NAME}/update/${data.id}`,
        method: "PUT",
        body: data,
        credentials: "include",
      }),
    }),

    trashTask: builder.mutation({
      query: ({ id }) => ({
        url: `${TASK_NAME}/${id}`,
        method: "PUT",
        credentials: "include",
      }),
    }),

    createSubTask: builder.mutation({
      query: ({ data, id }) => ({
        url: `${TASK_NAME}/create-subtask/${id}`,
        method: "PUT",
        body: data,
        credentials: "include",
      }),
    }),

    getSingleTask: builder.query({
      query: (id) => ({
        url: `${TASK_NAME}/${id}`,
        method: "GET",
        credentials: "include",
      }),
    }),

    postTaskActivity: builder.mutation({
      query: ({ data, id }) => ({
        url: `${TASK_NAME}/activity/${id}`,
        method: "post",
        body: data,
        credentials: "include",
      }),
    }),

    deleteRestoreTask: builder.mutation({
      query: ({ id, actionType }) => ({
        url: `${TASK_NAME}/delete-restore/${id}?actionType=${actionType}`,
        method: "DELETE",
        credentials: "include",
      }),
    }),

  }),
});

export const {
  useGetDashboardStatusQuery,
  useGetAllTaskQuery,
  useCreateTaskMutation,
  useDuplicateTaskMutation,
  useUpdateTaskMutation,
  useTrashTaskMutation,
  useCreateSubTaskMutation,
  useGetSingleTaskQuery,
  usePostTaskActivityMutation,
  useDeleteRestoreTaskMutation,
} = taskApiSlice;
