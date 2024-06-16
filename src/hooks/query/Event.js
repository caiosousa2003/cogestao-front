import { useMutation, useQuery } from "@tanstack/react-query";
import { createEvents, deleteEvents, getEvents, updateEvents } from "../../services/api/endpoints";

export function useGetEvents({
    onSuccess = () => {},
    onError = (err) => console.log(err),
} = {}) {
    return useQuery({
        queryKey: ['events'],
        queryFn: getEvents,
        onSuccess,
        onError,
    });
}

export function useCreateEvents({
    onSuccess = () => {},
    onError = (err) => console.log(err),
} = {}) {
    return useMutation({
        mutationFn: createEvents,
        onSuccess,
        onError
    });
}

export function useDeleteEvents({
    onSuccess = () => {},
    onError = (err) => console.log(err),
} = {}) {
    return useMutation({
        mutationFn: deleteEvents,
        onSuccess,
        onError
    });
}

export function useUpdateEvents({
    onSuccess =() => {},
    onError = (err) => console.log(err),
} = {}){
    return useMutation({
        mutationFn: updateEvents,
        onSuccess,
        onError,
    });
}