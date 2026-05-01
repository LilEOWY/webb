export type Role = 'user' | 'admin';

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          role: Role;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          role?: Role;
        };
        Update: {
          email?: string;
          full_name?: string | null;
          role?: Role;
        };
      };
      projects: {
        Row: {
          id: string;
          owner_id: string;
          name: string;
          description: string | null;
          status: 'active' | 'archived';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          owner_id: string;
          name: string;
          description?: string | null;
          status?: 'active' | 'archived';
        };
        Update: {
          name?: string;
          description?: string | null;
          status?: 'active' | 'archived';
        };
      };
    };
  };
};
