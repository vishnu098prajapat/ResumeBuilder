// Simulated local storage database
const db = {
  users: [],
  resumes: []
};

// Helper to simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const mockApi = {
  auth: {
    login: async (credentials) => {
      await delay(500); // Simulate network delay

      const user = db.users.find(u => u.email === credentials.email);
      
      if (!user || user.password !== credentials.password) {
        throw new Error('Invalid email or password');
      }

      const { password, ...userWithoutPassword } = user;
      return { user: userWithoutPassword };
    },

    register: async (userData) => {
      await delay(500);

      if (db.users.some(u => u.email === userData.email)) {
        throw new Error('Email already exists');
      }

      const newUser = {
        id: Date.now().toString(),
        ...userData,
        createdAt: new Date().toISOString()
      };

      db.users.push(newUser);
      const { password, ...userWithoutPassword } = newUser;
      return { user: userWithoutPassword };
    },

    logout: async () => {
      await delay(300);
      return { success: true };
    }
  },

  resumes: {
    getAll: async (userId) => {
      await delay(500);
      return db.resumes.filter(r => r.userId === userId);
    },

    getById: async (id) => {
      await delay(300);
      const resume = db.resumes.find(r => r.id === id);
      if (!resume) throw new Error('Resume not found');
      return resume;
    },

    create: async (data) => {
      await delay(500);
      const newResume = {
        id: Date.now().toString(),
        ...data,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      db.resumes.push(newResume);
      return newResume;
    },

    update: async (id, data) => {
      await delay(500);
      const index = db.resumes.findIndex(r => r.id === id);
      if (index === -1) throw new Error('Resume not found');
      
      const updatedResume = {
        ...db.resumes[index],
        ...data,
        updatedAt: new Date().toISOString()
      };
      db.resumes[index] = updatedResume;
      return updatedResume;
    },

    delete: async (id) => {
      await delay(500);
      const index = db.resumes.findIndex(r => r.id === id);
      if (index === -1) throw new Error('Resume not found');
      db.resumes.splice(index, 1);
      return { success: true };
    }
  }
};

// Add some initial data
db.users.push({
  id: '1',
  name: 'Test User',
  email: 'test@example.com',
  password: 'password'
}); 