import React from 'react';
import { motion } from 'framer-motion';
import { teamMembers } from '../../data/teamMembers';

export default function TeamGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {teamMembers.map((member, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="bg-ivory rounded-xl border border-sand p-5 space-y-4 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="aspect-[3/4] rounded-lg overflow-hidden bg-sand/20">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-serif text-espresso">{member.name}</h3>
            <p className="text-xs uppercase tracking-wider text-terracotta font-semibold">{member.role}</p>
          </div>
          <p className="text-xs text-warmcharcoal font-light leading-relaxed">
            {member.bio}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
