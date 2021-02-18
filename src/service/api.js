import api from "axios"

api.defaults.baseURL = "https://602d47dc30ba7200172242d1.mockapi.io/"

export default {
    async getTeams() {
        const teams = await api.get("teams")
        return teams.data
    }, 
    async getHighestAvg() {
        const highestAvg = await api.get("teams?sortBy=avgage&order=desc&page=1&limit=5")
        return highestAvg.data
    },
    async getLowestAvg() {
        const lowestAvg = await api.get("teams?sortBy=avgage&page=1&limit=5")
        return lowestAvg.data
    },
    async deleteTeam(id) {
        await api.delete(`teams/${id}`)
    },
    async createTeam() {
        await api.post("teams")
    },
    async getPlayers() {
        const players = await api.get("players?sortBy=name")
        return players.data
    }
}