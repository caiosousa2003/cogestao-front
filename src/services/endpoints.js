import api from './api';

export async function getEvents() {
  const { data } = await api.get(`/events`);
  return data;
}

export async function createEvents(body) {
  const { data } = await api.post(`/events`, body);
  return data;
}

export async function deleteEvents(id) {
  const { data } = await api.delete(`/events/${id}`);
  return data;
}

export async function updateEvents(obj) {
  const { data } = await api.put(`/events/${obj.id}`, obj.body);
  return data;
}