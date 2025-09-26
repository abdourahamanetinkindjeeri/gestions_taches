import React, { useEffect, useState } from "react";
import NotificationList from "../../components/common/NotificationList";
import { useTodoContext } from "../../context/useTodoContext";
import { Button } from "../../components/ui/index.js";
import { RefreshCw, LogOut, User } from "lucide-react";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

const ModernDashboardHeader = ({ user, onRefresh, onLogout, isLoading }) => {
  const userId = user?.id;
  const {
    notifications,
    isLoadingNotifications,
    fetchNotifications,
    markAllNotificationsRead,
  } = useTodoContext();
  const unreadCount = Array.isArray(notifications)
    ? notifications.filter((h) => h.estLu === false).length
    : 0;

  useEffect(() => {
    if (userId) fetchNotifications();
  }, [userId, fetchNotifications]);

  const [showNotif, setShowNotif] = useState(false);

  // Marquer toutes les notifications comme lues
  const markAllRead = async () => {
    await markAllNotificationsRead(userId);
  };

  // Afficher la liste et marquer comme lu
  const handleBadgeClick = async () => {
    if (unreadCount > 0) {
      await markAllRead();
    }
    setShowNotif(true);
  };
  return (
    <header className="flex items-center justify-between flex-shrink-0 px-4 py-2 mb-4 shadow-lg bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 rounded-xl">
      {/* Partie gauche : titre + badge */}
      <div className="relative flex items-center gap-6">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <Badge
          badgeContent={isLoadingNotifications ? "..." : unreadCount}
          color="success"
          onClick={handleBadgeClick}
          style={{ cursor: "pointer" }}
        >
          <MailIcon color="action" fontSize="large" />
        </Badge>
        {showNotif && (
          <NotificationList
            notifications={notifications}
            onClose={() => setShowNotif(false)}
          />
        )}
      </div>

      {/* Partie centre : utilisateur connecté */}
      <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-gray-800/60">
        <User size={28} className="text-blue-400" />
        <div className="flex flex-col">
          <span className="text-lg font-semibold text-white">
            {user?.prenom || user?.name || user?.nom || "Utilisateur"}
          </span>
          <span className="text-xs text-gray-300">Connecté</span>
        </div>
      </div>

      {/* Partie droite : actions */}
      <div className="flex items-center gap-3">
        <Button
          onClick={onRefresh}
          variant="ghost"
          className="px-3 py-2 text-white border-white/30 hover:bg-white/10"
          disabled={isLoading}
        >
          <RefreshCw
            size={18}
            className={`mr-1 ${isLoading ? "animate-spin" : ""}`}
          />
          Actualiser
        </Button>

        <Button
          onClick={onLogout}
          variant="danger"
          className="px-4 py-2 font-bold text-white border-none rounded-lg shadow hover:bg-red-600"
        >
          <LogOut size={18} className="mr-2" />
          Déconnexion
        </Button>
      </div>
    </header>
  );
};

export default ModernDashboardHeader;
